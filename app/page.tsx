import {getTranslations} from 'next-intl/server';
import {auth} from '@/auth';

export default async function Home() {
  const t = await getTranslations('HomePage');
  console.log('render',(await auth()))
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-24 px-8">
      <h1 className="text-[#333333] text-5xl">{t('title')}</h1>
      <h2 className="text-[#333333] text-5xl">{String((await auth())?.user?.role)}</h2>
      
    </div>
  );
}
