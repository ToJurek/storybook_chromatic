export const SimpleForm = () => (
    <div className="form-style-2">
        <div className="form-style-2-heading">Provide your information</div>
        <form action="" method="post">
            <label htmlFor="field1"><span>Name <span className="required">*</span></span><input type="text"
                                                                                                className="input-field"
                                                                                                name="field1" value=""/></label>
            <label htmlFor="field2"><span>Email <span className="required">*</span></span><input type="text"
                                                                                                 className="input-field"
                                                                                                 name="field2"
                                                                                                 value=""/></label>
            <label><span>Telephone</span><input type="text" className="tel-number-field" name="tel_no_1" value=""
            />-<input type="text" className="tel-number-field"
                      name="tel_no_2" value=""/>-<input
                type="text" className="tel-number-field" name="tel_no_3" value=""/></label>
            <label htmlFor="field4"><span>Regarding</span><select name="field4" className="select-field">
                <option value="General Question">General</option>
                <option value="Advertise">Advertisement</option>
                <option value="Partnership">Partnership</option>
            </select></label>
            <label htmlFor="field5"><span>Message <span className="required">*</span></span>
                <textarea name="field5"
                          className="textarea-field"></textarea></label>
            <label><span> </span><input type="submit" value="Submit"/></label>
        </form>
    </div>
)