import "@solana-wallets-solid/unified/index.css"
import "./app.css"

import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"
import { Suspense } from "solid-js"
import { WalletProvider } from "@solana-wallets-solid/solid"
import { UnifiedWalletProviderProps, UnifiedWalletButtonProps } from "@solana-wallets-solid/unified"

import Nav from "~/components/Nav"

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "unified-wallet-modal": UnifiedWalletProviderProps
    }
    interface IntrinsicElements {
      "unified-wallet-modal-button": UnifiedWalletButtonProps
    }
  }
}

export default function App() {
  // const adapters = [
  // new CoinbaseWalletAdapter(),
  // new TrezorWalletAdapter(),
  // new LedgerWalletAdapter(),
  // new SolflareWalletAdapter(),
  // new WalletConnectWalletAdapter({
  //   network: WalletAdapterNetwork.Mainnet,
  //   options: {
  //     relayUrl: "wss://relay.walletconnect.com",
  //     projectId: WC_PROJECT_ID,
  //     metadata: {
  //       name: "Coinhall",
  //       description: "Coinhall",
  //       url: "https://coinhall.org",
  //       icons: ["https://coinhall.org/favicon.svg"],
  //     },
  //   },
  // }),
  // ]
  // const wallets: Wallet[] = adapters.map(a => ({ adapter: a, readyState: a.readyState }))
  // console.log("app wallets: ", wallets)
  return (
    <Router
      root={props => (
        <WalletProvider
          autoConnect={true}
          disconnectOnAccountChange={true}
          localStorageKey="unified:wallet-stoarge-key"
          env={"devnet"}
        >
          <unified-wallet-modal
          // config={{
          //   env: "mainnet-beta",
          //   theme: "jupiter",
          //   metadata: {
          //     name: "UnifiedWallet69",
          //     description: "UnifiedWallet69",
          //     url: "https://jup.ag69",
          //     iconUrls: ["https://jup.ag/favicon.ico/69"],
          //   },
          //   walletlistExplanation: {
          //     href: "https://station.jup.ag/docs/additional-topics/wallet-list",
          //   },
          // }}
          />
          <Nav />
          <Suspense>{props.children}</Suspense>
        </WalletProvider>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
