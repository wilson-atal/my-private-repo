// import 'dotenv/config'
import Image from 'next/image';

const var1 = process.env.NEXT_PUBLIC_VAR1;

function HomePage() {
    return (
        <div>
            <h1 className="text-slate-400">Welcome to Next.js! </h1>
            <p>var1 : {var1}</p>
        </div>
    );
}

export default HomePage;