"use client";

import {
	Box,
	Button,
	Container,
	FormControl,
	FormControlLabel,
	TextField,
	Typography,
	RadioGroup,
	Radio,
	Tooltip
} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import LinearProgressWithLabel from "./LinearProgressWithLabel";
import FormConfirmation from "./FormConfirmation";

import {
    validateName,
    validateEmail,
    validatePhone,
    validateSalary,
} from '../utils/validation'

import { salaryRanges } from '../utils/validation';

import { useEffect, useState } from "react";

const TenantForm = () => {
	const [progress, setProgress] = useState<number>(0);
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [salary, setSalary] = useState<string>("");
	const [nameValid, setNameValid] = useState<boolean>(false);
	const [emailValid, setEmailValid] = useState<boolean>(false);
	const [phoneValid, setPhoneValid] = useState<boolean>(false);
	const [salaryValid, setSalaryValid] = useState<boolean>(false);
	const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
	
	useEffect(() => {
		const totalFields = 4;
		let filledFields = 0;
		
		if (nameValid) filledFields++;
		if (emailValid) filledFields++;
		if (phoneValid) filledFields++;
		if (salaryValid) filledFields++;

		setProgress((filledFields / totalFields) * 100);
	}, [nameValid, emailValid, phoneValid, salaryValid]);

	const handleInputChange = (
		setter: React.Dispatch<React.SetStateAction<string>>,
		value: string,
		validator: (value: string) => boolean,
		setValid: React.Dispatch<React.SetStateAction<boolean>>
	) => {
		setter(value);
		setValid(validator(value));
	};

	const handleProceed = () => {
		setShowConfirmation(true);
	};

	const handleCancel = () => {
		setName("");
		setEmail("");
		setPhone("");
		setSalary("");
		setNameValid(false);
		setEmailValid(false);
		setPhoneValid(false);
		setSalaryValid(false);
		setProgress(0);
		setShowConfirmation(false);
	};

	if (showConfirmation) {
		return (
		  <FormConfirmation
			name={name}
			email={email}
			phone={phone}
			salary={salary}
			onCancel={handleCancel}
		  />
		);
	}

	return (
		<Container>
			<Typography
				variant="h5"
				style={{
					fontWeight: "bold",
					margin: "0 0 10px 10px",
					textAlign: "center",
				}}
			>
				Tenant Application
			</Typography>

			<LinearProgressWithLabel value={progress} />

			<form
				name="basic"
				autoComplete="off"
				onSubmit={(e) => {
					e.preventDefault(); // prevent adding data to the URL
				}}
			>
				<TextField
					label="Name"
					name="name"
					value={name}
					onChange={(e) =>
						handleInputChange(
							setName,
							e.target.value,
							validateName,
							setNameValid
						)
					}
					variant="outlined"
					fullWidth
					required
					margin="normal"
					InputProps={{
                        endAdornment: (
                            <Box display="flex" alignItems="center">
                                {name ? 
								nameValid? (
                                    <CheckIcon sx={{ color: "green" }} />
                                ) : 
								<Tooltip title={<span style={{ fontSize: "1.1rem" }}>Name is too short</span>} arrow>
									<CloseIcon sx={{ color: "red", cursor: "pointer" }} />
								</Tooltip>
                                : null
								}
                            </Box>
                        ),
                    }}
				/>

				<TextField
					label="Email"
					name="email"
					value={email}
					onChange={(e) =>
						handleInputChange(
							setEmail,
							e.target.value,
							validateEmail,
							setEmailValid
						)
					}
					variant="outlined"
					fullWidth
					required
					margin="normal"
					type="email"
					InputProps={{
                        endAdornment: (
                            <Box display="flex" alignItems="center">
                                {email ? 
								emailValid? (
                                    <CheckIcon sx={{ color: "green" }} />
                                ) : <Tooltip title={<span style={{ fontSize: "1.1rem" }}>Invalid email</span>} arrow>
								<CloseIcon sx={{ color: "red", cursor: "pointer" }} />
							</Tooltip>
                                : null
								}
                            </Box>
                        ),
                    }}
				/>

				<TextField
					label="Phone Number"
					name="phone"
					value={phone}
					onChange={(e) => handleInputChange(setPhone, e.target.value, validatePhone, setPhoneValid)}
					variant="outlined"
					fullWidth
					required
					margin="normal"
					type="tel"
					InputProps={{
                        endAdornment: (
                            <Box display="flex" alignItems="center">
                                {phone ? 
								phoneValid? (
                                    <CheckIcon sx={{ color: "green" }} />
                                ) : <Tooltip title={<span style={{ fontSize: "1.1rem" }}>Invalid phone number (min. 7 digits; only numbers)</span>} arrow>
								<CloseIcon sx={{ color: "red", cursor: "pointer" }} />
							</Tooltip>
                                : null
								}
                            </Box>
                        ),
                    }}
				/>

				<FormControl component="fieldset" margin="normal" required>
					<Typography variant="h6" gutterBottom sx={{ fontSize: '1rem' }}>
						Salary Indication *
					</Typography>
					<RadioGroup
						name="salary"
						onChange={(e) => {
							setSalary(e.target.value);
							setSalaryValid(validateSalary(e.target.value));
						}}
					>
						{salaryRanges.map((range) => (
                    		<FormControlLabel
                        		key={range}
                        		value={range}
                        		control={<Radio />}
                        		label={range}
                    		/>
                		))}
					</RadioGroup>
				</FormControl>

				<Button
					type="submit"
					variant="contained"
					color="primary"
					disabled={progress !== 100}
					fullWidth
					onClick={handleProceed}
				>
					Proceed
				</Button>
			</form>
		</Container>
	);
};

export default TenantForm;
