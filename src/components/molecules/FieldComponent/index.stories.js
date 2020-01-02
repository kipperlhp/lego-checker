import React from 'react'
import { storiesOf } from '@storybook/react'
import { Form, Field } from 'react-final-form'
import FieldComponent from '.'
import Button from '../../atoms/Button'
import Text from '../../atoms/Text'

const validation = (value, formValues) => {
  return !value ? 'Required' : undefined
}

storiesOf('Molecules|FieldComponent', module)
  .add('default', () => (
    <Form
      onSubmit={(values) => console.log('values', values)}
      render={({ handleSubmit, pristine, values }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Field
              label="Text"
              name="text"
              component={FieldComponent}
              type="text"
              validate={validation}
              placeholder="'text' field"
              parse={(v) => v} // default parser will change form value of empty string to undefined
            />
            <br />
            <Field
              label="Number"
              name="number"
              component={FieldComponent}
              type="number"
              validate={validation}
              placeholder="'number' field"
              parse={(v) => v} // default parser will change form value of empty string to undefined
            />
            <br />
            <Field
              label="Textarea"
              name="textarea"
              component={FieldComponent}
              type="textarea"
              validate={validation}
              placeholder="'textarea' field"
              parse={(v) => v} // default parser will change form value of empty string to undefined
            />
            <br />
            <Button type="submit" disabled={pristine}>
              <Text palette="white">Submit</Text>
            </Button>
            <br />
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )
      }}
    />
  ))
