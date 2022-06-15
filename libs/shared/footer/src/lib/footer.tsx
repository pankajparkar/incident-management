import './footer.module.scss';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer style={{ color: 'gray', position: 'fixed', bottom: 0 }}>
      Copyrights 2022 | Powered By XYZ
    </footer>
  );
}

export default Footer;
