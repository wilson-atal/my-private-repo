interface DataProps {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const data: DataProps[] = [
    {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false,
    },
    {
        userId: 1,
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: false,
    },
];

const Page = () => {
    return (
        <>
            {data.map((d) => (
                <div key={d.id}>
                    <p>{d.id}</p>
                    <p>{d.title}</p>
                    <p>Completed: {d.completed.toString()}</p>
                    <br />
                </div>
            ))}
        </>
    );
};

export default Page;
