import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
 
export const config = {
  runtime: 'edge',
};
 
export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
 
    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title';
 
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            backgroundImage: 'linear-gradient(to right, #ff5382, #f6bbad)',
          }}
        >
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              left: 42,
              top: 42,
              alignItems: 'center',
            }}
          >
            <img
              alt="Allegro Cloud"
              height={40}
              src="data:image/svg+xml,%3Csvg width='240' height='40' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M48.692 2.26016C49.832 2.74016 50.5721 3.86016 50.5721 5.12016H50.5921V23.6802V34.8802C50.5921 36.6002 49.192 38.0002 47.4719 38.0002H26.0711H2.9501C1.73005 38.0002 0.650008 37.2802 0.20999 36.1602C-0.230028 35.0202 0.0299827 33.7602 0.910019 32.9202L24.011 10.7402C24.871 9.92016 26.1311 9.70016 27.2111 10.1602C28.3111 10.6202 29.0112 11.7002 29.0112 12.8802V18.4802L45.3118 2.86016C46.2119 2.00016 47.5319 1.76016 48.692 2.26016ZM24.071 33.0602V17.5602L7.91031 33.0602H13.8706C13.9706 32.9202 14.0906 32.7802 14.2306 32.6402L19.4308 27.6602C20.4308 26.7202 21.9909 26.7602 22.9309 27.7402C23.871 28.7202 23.831 30.3002 22.8509 31.2402L20.9508 33.0602H24.071ZM29.0112 33.0602H45.6319V23.6802V9.40016L29.0112 25.3402V33.0602ZM226.619 8.85936C219.239 8.85936 213.239 14.8594 213.239 22.2594C213.239 29.6394 219.239 35.6594 226.619 35.6594C234 35.6594 240 29.6594 240 22.2594C240 14.8794 234 8.85936 226.619 8.85936ZM226.619 28.7194C223.059 28.7194 220.159 25.8194 220.159 22.2594C220.159 18.6994 223.059 15.7994 226.619 15.7994C230.18 15.7994 233.08 18.6994 233.08 22.2594C233.08 25.8194 230.18 28.7194 226.619 28.7194ZM98.6329 8.96096H106.114V28.641H115.774V35.081H98.6329V8.96096ZM119.075 8.96096H126.555V28.641H136.216V35.081H119.075V8.96096ZM147.017 24.961H155.758V18.741H147.017V15.441H156.558V8.96096H139.537V35.081H156.778V28.641H147.017V24.961ZM200.858 8.98049C207.499 8.98049 210.959 11.5005 210.959 17.7005C210.959 21.9005 209.579 24.3605 206.419 25.5205L213.419 35.0805H204.579L199.198 26.3205H197.738V35.0805H190.258V8.98049H200.858ZM197.738 20.9605H199.538C202.578 20.9605 203.599 20.1405 203.599 17.6805C203.599 15.2805 202.578 14.6805 199.538 14.6805H197.738V20.9605ZM178.315 26.2008H173.195V21.1608H186.576V22.2808C186.576 23.6608 186.356 24.9808 185.976 26.2208C184.296 31.7008 179.196 35.6808 173.195 35.6808C165.815 35.6808 159.815 29.6608 159.815 22.2808C159.815 14.9008 165.815 8.88083 173.195 8.88083C175.935 8.88083 178.575 9.70083 180.836 11.2808L176.875 16.9608C175.795 16.2008 174.515 15.8008 173.195 15.8008C169.635 15.8008 166.735 18.7008 166.735 22.2608C166.735 25.8208 169.635 28.7208 173.195 28.7208C175.275 28.7208 177.135 27.7408 178.315 26.2008ZM78.0513 8.88083L65.8308 35.0808H73.2311L74.9311 31.4008H86.4716L88.1917 35.0808H95.592L83.2715 8.88083H78.0513ZM77.8313 25.1408L80.7314 18.9408L83.5915 25.1408H77.8313Z' /%3E%3C/svg%3E"
              style={{ margin: '0 30px' }}
              width={240}
            />
          </div>
          <div
            style={{
              fontSize: 60,
              fontStyle: 'bold',
              letterSpacing: '-0.025em',
              color: 'white',
              marginTop: 10,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
              display: 'flex',
            }}
          >
            <span>Presencejs 🌎 {title}</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}