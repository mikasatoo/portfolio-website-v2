import Layout from "@/components/Layout";

export default function Blog() {
    return (
        <Layout bgColor="bg-butteryellow">
            <div className="flex flex-col h-full p-8 md:p-16 gap-10 2xl:gap-16 font-[family-name:var(--font-geist-mono)] text-gray-700">
                <h1 className="text-3xl text-black font-bold lg:text-center">Blog Posts (IN PROGRESS)</h1>
                <p className="">Here&apos;s some stuff I&apos;ve written...</p>
            </div>
        </Layout>
    );
}