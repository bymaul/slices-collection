export type Slices = {
    name: string;
    url: string;
    status: string;
};

const slices: Slices[] = [
    {
        name: 'Agency Two',
        url: '/agency-two',
        status: 'wip',
    },
    {
        name: 'Finance One',
        url: '/finance-one',
        status: 'done',
    },
];

export default slices;
