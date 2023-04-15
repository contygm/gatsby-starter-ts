import React from 'react';

/**
 * A basic contact form. Fields: name, email, message, submit, and cancel.
 *
 * Currently, there is no submission action.
 * @category Components
 */
export const ContactForm = () => {
    function onSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            email: { value: string };
            message: { value: string };
            name: { value: string };
        };

        alert(`Thanks ${target.name.value} for your submission!`);
    }

    return (
        <form
            className="is-small"
            method="get"
            encType="text/plain"
            onSubmit={onSubmit}
        >
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        placeholder="Name"
                        name="name"
                    />
                </div>
            </div>

            <div className="field">
                <label className="label">YourEmail</label>
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        placeholder="email@email.com"
                        name="email"
                    />
                </div>
            </div>

            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea
                        className="textarea"
                        placeholder="Your messages"
                        name="message"
                    ></textarea>
                </div>
            </div>

            <div className="contact-action-buttons">
                <div className="control">
                    <button
                        type="submit"
                        className="primary-button"
                    >
                        Submit
                    </button>
                </div>
                <div className="control">
                    <button
                        type="reset"
                        name="reset"
                        className="light-grey-button"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    );
};
