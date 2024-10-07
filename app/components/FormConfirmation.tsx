import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";

interface FormConfirmationProps {
	name: string;
	email: string;
	phone: string;
	salary: string;
	onCancel: () => void;
}

const FormConfirmation: React.FC<FormConfirmationProps> = ({
	name,
	email,
	phone,
	salary,
	onCancel,
}) => {
	return (
		<Container maxWidth="sm">
			<Typography variant="h4" gutterBottom align="center">
				Confirm your details
			</Typography>

			<Box my={4}>
				<Typography variant="h6">Name:</Typography>
				<Typography variant="body1" gutterBottom>
					{name}
				</Typography>

				<Typography variant="h6">Email:</Typography>
				<Typography variant="body1" gutterBottom>
					{email}
				</Typography>

				<Typography variant="h6">Phone Number:</Typography>
				<Typography variant="body1" gutterBottom>
					{phone}
				</Typography>

				<Typography variant="h6">Salary Indication:</Typography>
				<Typography variant="body1">{salary}</Typography>
			</Box>

			<Box display="flex" justifyContent="space-between" mt={4}>
				<Button
					variant="contained"
					color="primary"
					// onClick={handleSubmit}
				>
					Submit
				</Button>
				<Button variant="outlined" color="secondary" onClick={onCancel}>
					Cancel
				</Button>
			</Box>
		</Container>
	);
};

export default FormConfirmation;
