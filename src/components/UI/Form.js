import './Form.scss';
import ToolTipDecorator from './ToolTipDecorator';
import { ActionTray, ActionAdd, ActionClose } from './Actions';

export default function Form ({ children, onSubmit, onCancel }) {
    // Initialisation ---------------------------------------
    // Hooks ------------------------------------------------
    // State ------------------------------------------------
    // Context ----------------------------------------------
    // Handlers ---------------------------------------------
    const handleSubmit = () => onSubmit;
    const handleCancel = () => onCancel;

    // View -------------------------------------------------
    return (
        <form className="BorderedForm">
        <div className='FormTray'>
        {
            children
        }
        </div>

            <ActionTray>
                    <ToolTipDecorator message="Submit record">
                        <ActionAdd showText onClick={handleSubmit} buttonText="Submit"/>
                    </ToolTipDecorator>
                    <ToolTipDecorator message="Cancel form">
                        <ActionClose showText onClick={handleCancel} buttonText="Cancel"/>
                    </ToolTipDecorator>
                </ActionTray>
        </form>
    );
};

function Item ({ children, label, htmlFor, advice, error }){
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

// ------------------------------------
// Compose Form Object ////////////////
// ------------------------------------
Form.Item = Item;
