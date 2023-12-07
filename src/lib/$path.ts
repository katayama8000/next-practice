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
    "sample16": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample16' as const, hash: url?.hash })
    },
    "sample17": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample17' as const, hash: url?.hash })
    },
    "sample18": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample18' as const, hash: url?.hash })
    },
    "sample19": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample19' as const, hash: url?.hash })
    },
    "sample2": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample2' as const, hash: url?.hash })
    },
    "sample20": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample20' as const, hash: url?.hash })
    },
    "sample21": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample21' as const, hash: url?.hash })
    },
    "sample22": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample22' as const, hash: url?.hash })
    },
    "sample23": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample23' as const, hash: url?.hash })
    },
    "sample24": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample24' as const, hash: url?.hash })
    },
    "sample25": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample25' as const, hash: url?.hash })
    },
    "sample26": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample26' as const, hash: url?.hash })
    },
    "sample27": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample27' as const, hash: url?.hash })
    },
    "sample28": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample28' as const, hash: url?.hash })
    },
    "sample29": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample29' as const, hash: url?.hash })
    },
    "sample3": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample3' as const, hash: url?.hash })
    },
    "sample30": {
      $url: (url?: { hash?: string }) => ({ pathname: '/Sample/sample30' as const, hash: url?.hash })
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
  "UI": {
    "index1": {
      $url: (url?: { hash?: string }) => ({ pathname: '/UI/index1' as const, hash: url?.hash })
    }
  },
  "YouTube": {
    "Hooks1": {
      $url: (url?: { hash?: string }) => ({ pathname: '/YouTube/Hooks1' as const, hash: url?.hash })
    },
    "Hooks2": {
      $url: (url?: { hash?: string }) => ({ pathname: '/YouTube/Hooks2' as const, hash: url?.hash })
    },
    "Hooks3": {
      $url: (url?: { hash?: string }) => ({ pathname: '/YouTube/Hooks3' as const, hash: url?.hash })
    },
    "Hooks4": {
      $url: (url?: { hash?: string }) => ({ pathname: '/YouTube/Hooks4' as const, hash: url?.hash })
    },
    "Hooks5": {
      $url: (url?: { hash?: string }) => ({ pathname: '/YouTube/Hooks5' as const, hash: url?.hash })
    },
    "Hooks6": {
      $url: (url?: { hash?: string }) => ({ pathname: '/YouTube/Hooks6' as const, hash: url?.hash })
    }
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
