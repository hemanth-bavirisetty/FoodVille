import React, { useState } from "react";

const useSendEmail = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const sendEmail = async (emailData) => {
		setIsLoading(true);
		setError(null);
		setSuccess(false);

		try {
			const response = await fetch("/api/sendEmail", {
				// Replace with your API endpoint
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(emailData),
			});

			if (response.ok) {
				setSuccess(true);
			} else {
				const errorData = await response.json();
				setError(errorData.message || "Failed to send email.");
			}
		} catch (error) {
			setError("An error occurred while sending the email.");
		} finally {
			setIsLoading(false);
		}
	};

	return {
		sendEmail,
		isLoading,
		error,
		success,
	};
};

export default useSendEmail;
