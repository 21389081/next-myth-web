import { AREAS } from '../data/area';
import Client from './client';

export default async function AreaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    // 取得動態路由 slug
    const { slug } = await params;
    // 在 AREAS 中尋找對應 slug 的區域資料
    const findArea = AREAS.find((a) => a.slug === slug);

    if (!findArea) {
        return <h1 className='text-center my-5 text-light'>找不到「{slug}」這個區域…</h1>;
    }

    return <Client area={findArea} />;
}
