import { Box } from '@mui/material'
import { FieldLabel } from '@next/components/atoms/FieldLabel'
import { IconItem } from '@next/components/atoms/IconItem'
export const SecondStepSection = ({
  walletProvider,
  changeWalletProvider
}: {
  walletProvider: string
  changeWalletProvider: (selectedOption: string) => void
}): JSX.Element => {
  return (
    <Box
      sx={{
        margin: {
          xl: '5rem 0 2.5rem',
          lg: '5rem 0 2.5rem',
          md: '5rem 0 2.5rem',
          sm: '2.5rem 0',
          xs: '2.5rem 0'
        }
      }}
    >
      <Box
        sx={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          margin: {
            xl: '0 0 7.813rem',
            lg: '0 0 7.813rem',
            md: '0 0 7.813rem',
            sm: '2.5rem 0',
            xs: '2.5rem 0'
          },
          width: '100%'
        }}
      >
        {' '}
        <FieldLabel FieldLabel={'Connect Network'} />
        <Box
          sx={{
            width: {
              xl: '32%',
              lg: '32%',
              md: '32%',
              sm: '48%',
              xs: '100%'
            }
          }}
        >
          <IconItem Title={'Stellar'} icon={'/images/Stellar.svg'} />
        </Box>
      </Box>
      <Box
        sx={{
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          width: '100%'
        }}
      >
        {' '}
        <FieldLabel FieldLabel={'Connect Wallet'} />
        <Box
          sx={{
            alignItems: 'flex-start',
            display: 'flex',
            flexWrap: {
              xl: 'nowrap',
              lg: 'nowrap',
              md: 'nowrap',
              sm: 'wrap',
              xs: 'wrap'
            },
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <Box
            sx={{
              margin: {
                xl: '0',
                lg: '0',
                md: '0',
                sm: '0 0 1.5rem',
                xs: '0'
              },

              width: { xl: '32%', lg: '32%', md: '32%', sm: '48%', xs: '100%' }
            }}
          >
            {' '}
            <IconItem
              selected={walletProvider === 'Freighter'}
              Title={'Freighter'}
              icon={'/images/Freighter.svg'}
              changeWalletProvider={changeWalletProvider}
            />
          </Box>
          <Box
            sx={{
              width: { xl: '32%', lg: '32%', md: '32%', sm: '48%', xs: '100%' },
              margin: {
                xl: '0 1.5rem',
                lg: '0 1.5rem',
                md: '0 1.5rem',
                sm: '0 0 1.5rem',
                xs: '1.5rem 0'
              }
            }}
          >
            {' '}
            <IconItem
              selected={walletProvider === 'WalletConnect'}
              Title={'WalletConnect'}
              icon={'/images/WalletConnect.svg'}
              changeWalletProvider={changeWalletProvider}
            />
          </Box>
          <Box
            sx={{
              width: { xl: '32%', lg: '32%', md: '32%', sm: '48%', xs: '100%' }
            }}
          >
            {/* {walletProvider !== 'XBULL'} */}
            <IconItem
              selected={walletProvider === 'XBULL'}
              Title={'XBULL'}
              icon={'/images/XBULL.svg'}
              changeWalletProvider={changeWalletProvider}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
