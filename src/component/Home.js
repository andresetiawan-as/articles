import React, {Fragment, useState, useEffect} from 'react'
import axios from 'axios'
import Table from './Table'

const Home = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            await axios.get('https://run.mocky.io/v3/4d078212-ad4c-414b-9495-782d4b38d5f3')
                .then(response => {
                    // handle success
                    setData(response.data.articles)
                })
                .catch(error => {
                    // handle error
                    console.log(error);
                })
        }
        getData()
    }, [])

    return (
        <Fragment>
            <Table
                userList={data}
            />
        </Fragment>
    )
}

export default Home
