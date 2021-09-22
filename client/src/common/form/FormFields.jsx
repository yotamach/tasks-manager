import React from "react";
import { Controller } from 'react-hook-form';
import { PropTypes } from 'prop-types';
import { TextField, Radio, RadioGroup, FormControl, FormControlLabel } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from "@date-io/moment";
import moment from "moment";

export function FormTextField({name, control, defaultValue = '', rules = {}, label, type = 'text'}) {
	return (<Controller
		name={name}
		control={control}
		defaultValue={defaultValue}
		render={({ field: { onChange, value = '', defaultValue }, fieldState: { error } }) => (
			<TextField
				label={label}
				defaultValue={defaultValue}
				variant="standard"
				value={value}
				onChange={onChange}
				error={!!error}
				helperText={error ? error.message : null}
				type={type}
				fullWidth
			/>
		)}
		rules={rules}
	/>
	);
}

FormTextField.propTypes = {
	control: PropTypes.object,
	rules: PropTypes.object,
	label: PropTypes.string,
	defaultValue: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string
}

export function FormDateField({name, control, defaultValue = '', rules = {}, label}) {
	return (<Controller
		name={name}
		control={control}
		defaultValue={defaultValue}
		render={({ field: { onChange, value = new Date(), defaultValue }, fieldState: { error } }) => (
			<MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
				<KeyboardDatePicker
					disableToolbar
					variant="standard"
					format="yyyy-MM-DD"
					label={label}
					value={value}
					onChange={onChange}
					defaultValue={defaultValue}
					error={error}
					KeyboardButtonProps={{
						'aria-label': 'Change date',
					}}
					fullWidth
				/>
			</MuiPickersUtilsProvider>
		)}
		rules={rules}
	/>
	);
}

FormDateField.propTypes = {
	control: PropTypes.object,
	rules: PropTypes.object,
	label: PropTypes.string,
	defaultValue: PropTypes.string,
	name: PropTypes.string
}

export function FormTextAreaField({name, control, defaultValue = '', rules = {}, label, type = 'text', rows = 3}) {
	return (<Controller
		name={name}
		control={control}
		defaultValue={defaultValue}
		render={({ field: { onChange, value = '', defaultValue }, fieldState: { error } }) => (
			<TextField
				label={label}
				variant="standard"
				defaultValue={defaultValue}
				value={value}
				multiline
				rows={rows}
				onChange={onChange}
				error={!!error}
				helperText={error ? error.message : null}
				type={type}
				fullWidth
			/>
		)}
		rules={rules}
	/>
	);
}

FormTextAreaField.propTypes = {
	control: PropTypes.object,
	rules: PropTypes.object,
	label: PropTypes.string,
	defaultValue: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	multiline: PropTypes.bool,
	rows: PropTypes.number
}

export function RadioGroupField({row = true, options = [], name, control, defaultValue = '', rules = {}}) {
	return (<Controller
		name={name}
		control={control}
		defaultValue={defaultValue}
		render={({ field: { onChange, value = '' }, fieldState: { error } }) => (
			<FormControl component="fieldset">
				<RadioGroup row={row} defaultValue={defaultValue} value={value} onChange={onChange} error={error}>
					{options.map(({label, value}, index) => <FormControlLabel
						key={name + index}
						value={value} 
						control={<Radio color="primary" />}
						label={label}
						labelPlacement="top"
					/>)}
				</RadioGroup>
			</FormControl>
		)}
		rules={rules}
	/>
	);
}

RadioGroupField.propTypes = {
	control: PropTypes.object,
	rules: PropTypes.object,
	defaultValue: PropTypes.string,
	name: PropTypes.string,
	options: PropTypes.array,
	row: PropTypes.bool
}
