import { createClient } from 'contentful'
import { useEffect } from 'react';
import { useState } from 'react';

const client = createClient({
	space: "sibcfmo2yoja",
	environment: "master",
	accessToken: import.meta.env.VITE_CMS_API_KEY,
});<section className="projects">
      <h2>Loading...</h2>
    </section>

// Custom Hook to set the data-fetching functionality
export const useFetchData = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])


  // Function to fetch Data
  const getData =  async () => {
    try {
      const response = await client.getEntries({content_type: "cmsTutor"})

      const fetchedData = response.items.map((item) => {
        const id = item.sys.id
        const { title, url, image } = item.fields
        const imgFile = image?.fields?.file?.url

        return { id, title, url, imgFile }
      })

      setData(fetchedData)
      setLoading(false)

    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => { getData() }, [])

  return { loading, data }
}