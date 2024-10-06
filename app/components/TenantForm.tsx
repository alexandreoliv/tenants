"use client";

import {
	Button,
	Container,
	FormControl,
	FormControlLabel,
	TextField,
	Typography,
	RadioGroup,
	Radio,
} from "@mui/material";

import { useState } from "react";

const TenantForm = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [salary, setSalary] = useState<string>("");
	
	const handleInputChange = (
		setter: React.Dispatch<React.SetStateAction<string>>,
		value: string,
	) => {
		setter(value);
	};

	return (
		<Container>
			<Typography
				variant="h4"
				style={{
					fontWeight: "bold",
					margin: "0 0 10px 10px",
					textAlign: "center",
				}}
			>
				Tenant Application
			</Typography>

			<form name="basic" autoComplete="off">
				<TextField
					label="Name"
					name="name"
					value={name}
					onChange={(e) =>
						handleInputChange(
							setName,
							e.target.value,
						)
					}
					variant="outlined"
					fullWidth
					required
					margin="normal"
				/>

				<TextField
					label="Email"
					name="email"
					value={email}
					onChange={(e) =>
						handleInputChange(
							setEmail,
							e.target.value,
						)
					}
					variant="outlined"
					fullWidth
					required
					margin="normal"
					type="email"
				/>

				<TextField
					label="Phone Number"
					name="phone"
					value={phone}
					onChange={(e) => handleInputChange(setPhone, e.target.value)}
					variant="outlined"
					fullWidth
					required
					margin="normal"
					type="tel"
				/>

				<FormControl component="fieldset" margin="normal" required>
					<Typography variant="h6" gutterBottom>
						Salary Indication *
					</Typography>
					<RadioGroup
						name="salary"
						onChange={(e) => {
							setSalary(e.target.value);
						}}
					>
						<FormControlLabel
							value="0 - 1.000"
							control={<Radio />}
							label="0 - 1.000"
						/>
						<FormControlLabel
							value="1.000 - 2.000"
							control={<Radio />}
							label="1.000 - 2.000"
						/>
						<FormControlLabel
							value="2.000 - 3.000"
							control={<Radio />}
							label="2.000 - 3.000"
						/>
						<FormControlLabel
							value="3.000 - 4.000"
							control={<Radio />}
							label="3.000 - 4.000"
						/>
						<FormControlLabel
							value="More than 4.000"
							control={<Radio />}
							label="More than 4.000"
						/>
					</RadioGroup>
				</FormControl>

				<Button
					type="submit"
					variant="contained"
					color="primary"
					fullWidth
				>
					Proceed
				</Button>
			</form>
		</Container>
	);
};

export default TenantForm;
