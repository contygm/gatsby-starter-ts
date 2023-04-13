import React from 'react';

/**
 * A basic contact form. Fields: name, email, message, submit, and cancel.
 *
 * Currently, there is no submission action.
 * @category Components
 */
export const ContactForm = () => {
    // console.log form values on submit
    // TODO: make an alert
    function onSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

        // const target = e.target as typeof e.target & {
        //     email: { value: string };
        //     message: { value: string };
        //     name: { value: string };
        // };

        console.log('contact form submit');
        // console.log('email:', target.email.value);
        // console.log('message:', target.message.value);
    }

    // mailto action will only work in IE (lol)
    return (
        <form
            className="is-small"
            method="get"
            // action={`mailto:${props.email}`}
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
