import useSWR from "swr";

const fetcher = async() => {
 const response = await fetch(`http://localhost:4000/dashboard`);
 const data = await response.json();
 return data;
};

const DashboardSWR = () => {
    const {data, error} = useSWR(`dashboard`,fetcher);

    if(error) return `An error has been occured`;
    if(!data) return 'Loading';

    return (
        <div>
            <h2>Dashboard SWR</h2>
            <h2>posts - {data.posts}</h2>
            <h2>posts - {data.likes}</h2>
            <h2>posts - {data.followers}</h2>
            <h2>posts - {data.following}</h2>
        </div>
    )
}

export default DashboardSWR;