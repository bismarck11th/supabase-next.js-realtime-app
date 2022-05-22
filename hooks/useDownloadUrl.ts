import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase'

export const useDownloadUrl = (
  filepath: string | undefined,
  key: 'avatars' | 'posts'
) => {
  const [isLoading, setIsLoading] = useState(false)
  const [fullUrl, setFullUrl] = useState('')
  const bucketName = key === 'avatars' ? 'avatars' : 'posts'

  useEffect(() => {
    if (filepath) {
      const download = async () => {
        setIsLoading(true)
        const { data, error } = await supabase.storage
          .from(bucketName)
          .download(filepath)
        if (error) {
          setIsLoading(false)
          throw error
        }
        setFullUrl(URL.createObjectURL(data!))
        setIsLoading(false)
      }
      download()
    }
  }, [filepath, bucketName])

  return { isLoading, fullUrl, setFullUrl }
}
