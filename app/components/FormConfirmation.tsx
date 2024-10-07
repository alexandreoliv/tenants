import React, { useState } from "react";
import {
	Container,
	Typography,
	Box,
	Button,
	CircularProgress,
	Alert,
} from "@mui/material";

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
	const [loading, setLoading] = useState<boolean>(false);
	const [result, setResult] = useState<{
		success: boolean;
		message: string;
	} | null>(null);

	const handleSubmit = async () => {
		setLoading(true);
		setResult(null);

		try {
			const response = await fetch("/api/add-tenant", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, email, phone, salary }),
			});

			if (response.ok) {
				setResult({
					success: true,
					message: "Form submitted successfully.",
				});
			} else {
				const errorData = await response.json();
				setResult({
					success: false,
					message: errorData.error || "Submission failed.",
				});
			}
		} catch (error) {
			setResult({
				success: false,
				message: "An unexpected error occurred.",
			});
		} finally {
			setLoading(false);
		}
	};

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

			{loading ? (
				<Box display="flex" justifyContent="center" my={4}>
					<CircularProgress />
				</Box>
			) : result ? (
				<Alert
					severity={result.success ? "success" : "error"}
					sx={{ my: 4 }}
				>
					{result.message}
				</Alert>
			) : (
				<Box display="flex" justifyContent="space-between" mt={4}>
					<Button
						variant="contained"
						color="primary"
						onClick={handleSubmit}
					>
						Submit
					</Button>
					<Button
						variant="outlined"
						color="secondary"
						onClick={onCancel}
					>
						Cancel
					</Button>
				</Box>
			)}
		</Container>
	);
};

export default FormConfirmation;
