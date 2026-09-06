import {
    useGetAllAssetsQuery,
} from "../../services/assetsApi"
import LoadingSpinner from "../LoadingSpinner"
import ErrorMessage from "../ErrorMessage"
import AssetStatus from "./AssetStatus"

export default function AssetList() {
    const {
        data: assets = [],
        isLoading,
        error,
    } = useGetAllAssetsQuery()

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error) {
        return <ErrorMessage message="Loading Assets" />
    }

    if (assets.length === 0) {
        return <p>No assets</p>
    }

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Status</th>
                        <th>Purchased</th>
                    </tr>
                </thead>
                <tbody>
                    {assets.map((asset) => (
                        <tr key={asset.id}>
                            <th>{asset.id}</th>
                            <td>{asset.brand}</td>
                            <td>{asset.model}</td>
                            <td>
                                <AssetStatus asset={asset}>
                                    {asset.status}
                                </AssetStatus>
                            </td>
                            <td>{asset.purchased_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}