export const pagesPath = {
  "sample1": {
    $url: (url?: { hash?: string }) => ({ pathname: '/sample1' as const, hash: url?.hash })
  },
  "sample2": {
    $url: (url?: { hash?: string }) => ({ pathname: '/sample2' as const, hash: url?.hash })
  },
  "sample3": {
    $url: (url?: { hash?: string }) => ({ pathname: '/sample3' as const, hash: url?.hash })
  },
  "sample4": {
    $url: (url?: { hash?: string }) => ({ pathname: '/sample4' as const, hash: url?.hash })
  },
  "sample5": {
    $url: (url?: { hash?: string }) => ({ pathname: '/sample5' as const, hash: url?.hash })
  },
  "sample6": {
    $url: (url?: { hash?: string }) => ({ pathname: '/sample6' as const, hash: url?.hash })
  },
  "sample7": {
    $url: (url?: { hash?: string }) => ({ pathname: '/sample7' as const, hash: url?.hash })
  },
  "sample8": {
    $url: (url?: { hash?: string }) => ({ pathname: '/sample8' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
