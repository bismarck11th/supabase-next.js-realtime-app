export type Profile = {
  id: string | undefined
  created_at: string
  updated_at: string
  username: string | undefined
  avatar_url: string | undefined
  favorites: string | undefined
}

export type EditedProfile = {
  username: string | undefined
  avatar_url: string | undefined
  favorites: string | undefined
}
