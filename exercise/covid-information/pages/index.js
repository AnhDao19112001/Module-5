import Image from 'next/image'
import {Inter} from 'next/font/google'
import axios from "axios";

const inter = Inter({subsets: ['latin']})
export default function Home() {
    return (
        <>
            <h1>hello</h1>
            <table>
                <thead>
                <tr>
                    <td>Date</td>
                    <td>Confirmed</td>
                    <td>Active</td>
                    <td>Recovered</td>
                    <td>Deaths</td>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user) => (
                        <tr key={user}>
                            <td>{user.date}</td>
                            <td>{user.comfirmed}</td>
                            <td>{user.active}</td>
                            <td>{user.recovered}</td>
                            <td>{user.deaths}</td>
                        </tr>))
                }
                </tbody>
            </table>
        </>
    )
}
export const getStaticProps = async () => {
    const response = await axios.get('https://static.pipezero.com/covid/data.json')
    return {
        props: {
            users: response.data
        }
    }
}
