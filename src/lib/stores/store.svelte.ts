
export default function createCurrentFormInput() {

	let value = $state(0);

	return {
		get value () { return value; },
		set value (newValue) { value = newValue; },
		reset () { value = 0; },
	};

}

export const current = createCurrentFormInput();
