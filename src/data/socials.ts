import { FaLinkedin } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { SiGithub, SiHuggingface, SiKaggle } from 'react-icons/si'
import type { IconType } from 'react-icons'

export interface Social {
  id: string
  label: string
  href: string
  Icon: IconType
}

export const socials: Social[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/oralet86', Icon: SiGithub },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/mert-ficici', Icon: FaLinkedin },
  { id: 'kaggle', label: 'Kaggle', href: 'https://kaggle.com/oralet', Icon: SiKaggle },
  { id: 'huggingface', label: 'Hugging Face', href: 'https://huggingface.co/oralet86', Icon: SiHuggingface },
  { id: 'email', label: 'Email', href: 'mailto:mert.ficici86@gmail.com', Icon: MdEmail },
]
