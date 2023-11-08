const { useState, useEffect } = require("react")

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [dashboardData, setDashboardData] = useState(null);

    const fetchDashboardData = async () => {
        const response = await fetch(`http://localhost:4000/dashboard`);
        const data = await response.json();
        setDashboardData(data);
        setIsLoading(false);
    }

    useEffect(() =>{
         fetchDashboardData();
    },[])

    if(isLoading){
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <h2>posts - {dashboardData.posts}</h2>
            <h2>posts - {dashboardData.likes}</h2>
            <h2>posts - {dashboardData.followers}</h2>
            <h2>posts - {dashboardData.following}</h2>
        </div>
    )
};

export default Dashboard;