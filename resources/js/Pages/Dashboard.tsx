import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import type { RootState } from '@/store';
import { useSelector, useDispatch } from 'react-redux'
import { decrement , increment } from '@/data/properties';

export default function Dashboard() {

    const count = useSelector((state: RootState) => state.counter.value)
    const property = useSelector((state: RootState) => state.property.value)

    const dispatch = useDispatch()

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="py-12">

                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                    <span> {property}</span>  dd
                    <br />
                        <button
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                        >
                        Increment
                        </button>
                        <span>{count}</span>
                        <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                        >
                        Decrement
                        </button>
                    </div>
                </div>

            </div>
        </AuthenticatedLayout>
    );
}
