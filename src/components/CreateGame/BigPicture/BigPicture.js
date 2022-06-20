/* eslint-disable react/no-unescaped-entities */
import { Form, TextArea } from "semantic-ui-react";

function BigPicture() {  
    return (
        <div className="players">
            <h2 className="players--title">Vue d'ensemble</h2>
            <Form.Field
            control={TextArea}
            label=''
            placeholder='...'
            /> 
      </div>
    );
}
  
// == Export
export default BigPicture;