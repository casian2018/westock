import React, { useState } from "react";

const SupportPage: React.FC = () => {
  const [message, setMessage] = useState("");

  const sendMessageToDiscord = async () => {
    try {
      const webhookUrl = "YOUR_DISCORD_WEBHOOK_URL";
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: message }),
      });

      if (response.ok) {
        console.log("Message sent to Discord successfully!");
      } else {
        console.error("Failed to send message to Discord.");
      }
    } catch (error) {
      console.error(
        "An error occurred while sending the message to Discord:",
        error
      );
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessageToDiscord();
  };

  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Support Page
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Problem Details
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={handleInputChange}
                placeholder="Describe your problem here"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
