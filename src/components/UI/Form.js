import './Form.scss';

export dafault function Form () {
    // Initialisation ---------------------------------------
    // Hooks ------------------------------------------------
    // State ------------------------------------------------
    // Context ----------------------------------------------
    // Handlers ---------------------------------------------
    // View -------------------------------------------------
    return (
        <form className="BorderedForm">

            <ActionTray>
                    <ToolTipDecorator message="Submit new module">
                        <ActionAdd showText onClick={handleSubmit} buttonText="Submit"/>
                    </ToolTipDecorator>
                    <ToolTipDecorator message="Cancel submission">
                        <ActionClose showText onClick={handleCancel} buttonText="Cancel"/>
                    </ToolTipDecorator>
                </ActionTray>
        </form>
    );
};

function FormItem ({ children, label, htmlFor, advice, error }){
    // Initialisation ---------------------------------------
    // Hooks ------------------------------------------------
    // State ------------------------------------------------
    // Context ----------------------------------------------
    // Handlers ---------------------------------------------
    // View -------------------------------------------------
    return (
        <div className="FormItem">
            <label className="FormLabel" htmlFor={htmlFor}>{label}</label>
            {
            advice && <p className="FormAdvice">{advice}</p>
            }
            {children}
            {
            error && <p className="FormError">{error}</p>
            }
        </div>
    );
}