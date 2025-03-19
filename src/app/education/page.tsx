import Layout from "@/components/Layout";

export default function Education() {
    return (
        <Layout bgColor="bg-butteryellow">
            <div className="flex flex-col h-full p-8 md:p-16 gap-10 2xl:gap-16 font-[family-name:var(--font-geist-mono)] text-gray-700">
                <h1 className="text-3xl text-black font-bold lg:text-center">Education</h1>
                <p className="">Here's my creds...</p>
            </div>
        </Layout>
    );
}