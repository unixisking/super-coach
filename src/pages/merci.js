import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Navbar from '../components/navbar';

export default function MerciPage() {
  return (
    <Layout>
      <Navbar />
      <div className="bg-black mt-24 h-screen">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Merci de nous avoir contactés</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Nous traitons en ce moment votre demande, un de nos collaborateurs
            va vous répondre dans quelques minutes. Entre-temps n’hésitez pas à
            consulter nos:
          </p>
          <Link
            internal
            href="/#témoignages"
            className="inline-flex items-center px-8 py-2 border border-transparent text-base font-medium rounded-lg text-white bg-primary rounded-3xl mt-6"
          >
            Histoires de Succès
          </Link>
        </div>
      </div>
    </Layout>
  );
}
