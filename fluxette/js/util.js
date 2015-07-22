// Order-preserving single filter
export let splicefilter = (iter, pred) => {
	let left = [], splice, right = [];
	let found = false;
	for (let i in iter) {
		let val = iter[i];
		if (!found) {
			if (pred(val)) {
				splice = val;
				found = true;
			}
			else {
				left.push(val);
			}
		}
		else {
			right.push(val);
		}
	}
	return [left, splice, right];
}
