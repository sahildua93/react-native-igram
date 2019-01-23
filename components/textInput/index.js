import React, { Component, Fragment } from 'react';
import { TextInput, Text } from 'react-native';

export class InputText extends Component {
  render() {
    const { name, style, placeholder, placeholderTextColor, onChange, value, error, errorText, errorStyle } = this.props;
    return(
      <Fragment>
        <TextInput
          value={ value }
          name={ name }
          style={ style }
          placeholder={ placeholder }
          placeholderTextColor={ placeholderTextColor }
          onChangeText={ (value) => onChange(value, name)  }
        />
        { error === `${name}Error` && <Text style={ errorStyle } >{ errorText }</Text> }
      </Fragment>

    )
  }
}

export default InputText;