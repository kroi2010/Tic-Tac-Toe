import React from 'react';

const InputSet = ({ settings, onChange }) => {
  return (
    <fieldset className="input-set">
      <label>{settings.label}:</label>

      <input
        type={settings.type}
        required={settings.required}
        name={settings.name}
        maxLength={settings.maxLength}
        minLength={settings.minLength}
        placeholder={settings.placeholder}
        pattern={settings.pattern}
        title={settings.msg}
        onChange={onChange}
      />
    </fieldset>
  );
};

export default InputSet;
