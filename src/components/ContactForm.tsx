import React from 'react';

/**
 * @description Page header for standard pages
 * @param title - the page title to be displayed
 * @param alignCenter - boolean;
 */
export const ContactForm = () => {
    // console.log form values on submit
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

            <div className="field is-grouped">
                <div className="control">
                    <button
                        type="submit"
                        className="button is-primary"
                    >
                        Submit
                    </button>
                </div>
                <div className="control">
                    <button
                        type="reset"
                        name="reset"
                        className="button has-background-grey-lighter"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    );
};
