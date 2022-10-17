export const pagesPath = {
  "Sample": {
    "sample1": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample1' as const, hash: url?.hash })
    },
    "sample10": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample10' as const, hash: url?.hash })
    },
    "sample11": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample11' as const, hash: url?.hash })
    },
    "sample12": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample12' as const, hash: url?.hash })
    },
    "sample13": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample13' as const, hash: url?.hash })
    },
    "sample14": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample14' as const, hash: url?.hash })
    },
    "sample15": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample15' as const, hash: url?.hash })
    },
    "sample2": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample2' as const, hash: url?.hash })
    },
    "sample3": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample3' as const, hash: url?.hash })
    },
    "sample4": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample4' as const, hash: url?.hash })
    },
    "sample5": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample5' as const, hash: url?.hash })
    },
    "sample6": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample6' as const, hash: url?.hash })
    },
    "sample7": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample7' as const, hash: url?.hash })
    },
    "sample8": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample8' as const, hash: url?.hash })
    },
    "sample9": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample9' as const, hash: url?.hash })
    }
  },
  "YouTube": {
    "Hooks1": {
      $url: (url?: { hash?: string }) => ({ pathname: '/YouTube/Hooks1' as const, hash: url?.hash })
    }
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
