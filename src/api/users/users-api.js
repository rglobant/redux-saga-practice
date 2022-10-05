export const getUsers = () => {
	return new Promise((resolve) => {
		resolve([
            {
                id: 1,
                name: 'Name 1'
            },
            {
                id: 2,
                name: 'Name 2'
            }
        ]);
	});
};
