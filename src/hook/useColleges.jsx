import { useQuery } from '@tanstack/react-query'

const useColleges = () => {
    const { isLoading, data : colleges = [], refetch } = useQuery({
        queryKey: ['colleges'],
        queryFn: async () => {
            const response = await fetch('https://college-server-zubaerjewel.vercel.app/sixCollege')
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            return response.json()
          },
      })
      return { colleges, isLoading, refetch }
};

export default useColleges;