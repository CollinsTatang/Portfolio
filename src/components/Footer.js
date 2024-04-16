import {
  Xicon,
  LinkedinIcon,
  GithubIcon,
  FacebookIcon,
} from './Icons';

const navigation = [
  {
    name: 'Github',
    href: 'https://github.com/CollinsTatang',
    icon: (props) => <GithubIcon {...props} />,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/CollinsTatang1',
    icon: (props) => <Xicon {...props} />,
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/makungong-collins/',
    icon: (props) => <LinkedinIcon {...props} />,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/el.collins.71',
    icon: (props) => <FacebookIcon {...props} />,
  },
];

function Footer() {
  return (
    <footer className="bg-gray-700">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-white">
            &copy; 2024 Collins Tatang, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
