import './Form.scss';

export dafault function Form () {
    // Initialisation ---------------------------------------
    // Hooks ------------------------------------------------
    // State ------------------------------------------------
    // Context ----------------------------------------------
    // Handlers ---------------------------------------------
    // View -------------------------------------------------
    return ();
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