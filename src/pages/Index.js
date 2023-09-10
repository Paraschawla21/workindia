import { useState, useEffect } from "react";
import axios from "axios";
import List from "../components/List";

function Index() {
    const [appliedCandidate, setAppliedCandidate] = useState([]);
    const [acceptedCandidate, setAcceptedCandidate] = useState([]);
    const [rejectedCandidate, setRejectedCandidate] = useState([]);

    const fetchUsers = async () => {
        try {
            const url =
                "https://run.mocky.io/v3/ae511409-8c0e-40ed-9336-aebcb602823d";
            const response = await axios.get(url);
            const { data } = response.data;
            const a_arr = data.filter((e) => e.status === "Applied");
            const r_arr = data.filter((e) => e.status === "Rejected");
            const ac_arr = data.filter((e) => e.status === "Accepted");
            setAppliedCandidate(a_arr);
            setRejectedCandidate(r_arr);
            setAcceptedCandidate(ac_arr);
            console.log(data);
        } catch (error) {
            console.log("Something went wrong...!!");
        }
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="flex flex-col md:flex-row justify-around px-6 my-10">
            <List title={"Applied"} users={appliedCandidate} />{" "}
            <List title={"Accepted"} users={acceptedCandidate} />{" "}
            <List title={"Rejected"} users={rejectedCandidate} />{" "}
        </div>
    );
}

export default Index;
