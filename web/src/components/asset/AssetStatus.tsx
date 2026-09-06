import type { Asset } from "../../types/asset"

type Props = {
    asset: Asset
    children: React.ReactNode
}

export default function AssetStatus({ asset, children }: Props) {
    return (
        <span
            className={`badge badge-lg gap-2 ${
                asset.status === "available"
                    ? "badge-success"
                    : "badge-error"
            }`}
        >
            {children}
        </span>
    )
}