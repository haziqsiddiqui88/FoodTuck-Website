export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-19'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skM127ZNgH5TdvAR2e9M9oWfMRa9ab5sljejimyNhpF5qdiyDDeWe2ulRdbwiK4Htr2DuzbESQ3BZYnSO7rKaMPgtwJsLv05kAe1oJsMfOHUpZlAn4Cept6MQJj0lbLOFQmrIouk7PuNjs4cxiaDjLS0GGYvSfwvIK2fZdDkt3gQdBXCotqD",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
