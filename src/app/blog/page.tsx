import Layout from "@/components/Layout";

export default function Blog() {
    return (
        <Layout bgColor="bg-butteryellow">
            <div className="p-8">
                <h1 className="text-3xl font-bold">Blog Posts</h1>
                <p className="mt-4">Here's some stuff I've written...</p>
            </div>
        </Layout>
    );
}