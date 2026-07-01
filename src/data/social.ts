import type { SocialLink } from '@/types'

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/asrarahmed-01',
    icon: 'github',
    username: '@asrarahmed-01',
    visible: true,
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/asrar-amd',
    icon: 'linkedin',
    username: 'Asrar Ahmed',
    visible: true,
  },
  {
    platform: 'Mail',
    url: 'mailto:asrarahmed.syed1@email.com',
    icon: 'mail',
    username: 'asrarahmed.syed1@email.com',
    visible: true,
  },
  {
    platform: 'Phone',
    url: 'tel:+91XXXXXXXXXX',
    icon: 'phone',
    username: '+91 XXXXXXXXXX',
    visible: false, // Set to true to show phone
  },
  {
    platform: 'Behance',
    url: 'https://behance.net/yourusername',
    icon: 'behance',
    username: '@yourusername',
    visible: false,
  },
  {
    platform: 'LeetCode',
    url: 'https://leetcode.com/yourusername',
    icon: 'leetcode',
    username: '@yourusername',
    visible: true,
  },
  {
    platform: 'AtCoder',
    url: 'https://atcoder.jp/users/yourusername',
    icon: 'atcoder',
    username: '@yourusername',
    visible: true,
  },
  {
    platform: 'Codeforces',
    url: 'https://codeforces.com/profile/yourusername',
    icon: 'codeforces',
    username: '@yourusername',
    visible: true,
  },
  {
    platform: 'CodeChef',
    url: 'https://codechef.com/users/yourusername',
    icon: 'codechef',
    username: '@yourusername',
    visible: false,
  },
]
