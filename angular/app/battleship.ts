export class Ship {
	type: number;
	status: boolean;
	size: number;
	constructor(
		type: number,
		status: boolean,
		size: number) {
			this.type = type;
			this.status = status;
			this.size = size;
	}
}